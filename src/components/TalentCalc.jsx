import { useState, useMemo, useEffect } from "react"
import { warningToast, successToast, errorToast } from "../utils/toasts"

import TalentPath from "./TalentPath"
import backgroundImage from "../assets/talent-calc-bg.png"
import { talentPath1, talentPath2 } from '../data/TalentPaths'

export default function() {
    const TotalPoints = 6;
    const [pathOne, setPathOne]  = useState(talentPath1)
    const [pathTwo, setPathTwo]  = useState(talentPath2)
    const usedPoints = useMemo(() => {
        const allPaths = [...pathOne, ...pathTwo]
        const activeSkills = allPaths.filter((p) => p.active)
        return activeSkills.length
    }, [pathOne, pathTwo])


    const useSkillPoint = (skillId, path, setPath) => {
        const currentSkill = path.find((p) => p.id == skillId)

        // checks that this skill doesn't have any that depend on it
        const upSkill = path.find((p) => p.dependsOnId == currentSkill.id )
        if(upSkill?.active) {
            warningToast('You cannot deactivate a skill that is depended on ⛔')
            return
        }

        currentSkill.active = !currentSkill.active
        // Notifying the user that the skills has been updated        
        successToast(`${currentSkill.name} as been ${currentSkill.active ? 'Activated' : 'Deactivated'}!🔥`)


        const newPathsArr = path.map((p) => p.id === skillId ? currentSkill : p)
        setPath(newPathsArr)
    }

    useEffect(() => {
        if(usedPoints >= TotalPoints)
            warningToast("All skills have been allocated 🎉")
    }, [usedPoints, TotalPoints, warningToast])

    // useEffect(() => {
    //     warningToast(`You only have ${TotalPoints} to spend. Choose Wisely!🤹`)
    // }, [])

    return (
        <div className="max-w-5xl h-full md:h-auto " >
            <div 
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="bg-cover bg-center padding py-6 px-10 grid grid-cols-1 gap-y-10"
            >
                <div className="bg-slate-800 text-center p-4" >
                    <h1 className="text-white text-4xl" >Titan Star Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
                </div>
                <div className="grid grid-rows-[auto,1fr] lg:grid-rows-1 lg:grid-cols-[1fr,auto] gap-12" >
                    <div className="grid grid-cols-1 gap-y-6" >
                        <TalentPath 
                            title="Talent Path 1"
                            path={pathOne}
                            useSkillPoint={(id) => useSkillPoint(id, pathOne, setPathOne)}
                            limitReached={usedPoints >= TotalPoints}
                        />
                        <TalentPath
                            title="Talent Path 2"
                            path={pathTwo}
                            useSkillPoint={(id) => useSkillPoint(id, pathTwo, setPathTwo)}
                            limitReached={usedPoints >= TotalPoints}
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 justify-center items-center row-start-1 lg:col-start-2" >
                        <h2 className="text-white text-3xl" >{usedPoints}/{TotalPoints}</h2>
                        <h3 className="text-slate-400 text-xl" >Points Spent</h3> 
                    </div>
                </div>
            </div>
        </div>
    )
}