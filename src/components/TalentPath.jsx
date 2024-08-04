import { Fragment, useMemo } from "react"
import icon from "../assets/talent-icons-sprite.png"

function TalentPath({
    title,
    path,
    useSkillPoint,
    limitReached
}) {

    const isButtonDisabled = (p, i) => {
        // If points limit has been reached and current btn is not active
        // We disable it till points are freed up
        if(!p.active && limitReached) return true

        return i == 0 ? false : !isActive(p.dependsOnId)
    }

    const isActive = (dependsOnId) => {
        const previousSkill = path.find((p) => p.id == dependsOnId) || {}
        return previousSkill.active || false
    }

    return (
        <div className="grid grid-cols-[auto,1fr]" >
            <h3 className="text-xl text-white flex items-center" >{title}</h3>
            <div>
                <div className="flex flex-col md:flex-row items-center p-4">
                    {path.map((p, i) => {
                        const btnDisabled = isButtonDisabled(p, i)
                        return(
                            <Fragment key={`skill-${p.name}-${i}`}>
                                <button  onClick={() => useSkillPoint(p.id)} className={`px-4 py-2 btn btn-dark text-white rounded ${p.active ? 'border-2 border-blue-500' : ''}`} disabled={btnDisabled} >
                                    {/* {p.name} */}
                                    <img style={{ "backgroundImage": `url('${icon}')`, backgroundPosition: p.active ? p.posActive : p.posInactive  }} className="size-12" alt="" />
                                </button>
                                {i < path.length - 1 ? (
                                    <div className={`w-2 h-16 md:w-16 md:h-2 ${p.active ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                                ): null}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TalentPath;