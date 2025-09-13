import styles from "./styles.module.css"
import classNames from "classnames/bind";


const cx = classNames.bind(styles)

function ProjectCard({ title="", content="", expandedContent="", icons=[]}) {
    return (
        <div className={`flex flex-col ${cx("project-card")} w-1/4 p-10 space-y-10 rounded-lg justify-between`}>
            <div className="font-extrabold">
                {/* title */}
                {title}
            </div>
            <div className="">
                {/* short content */}
                {content}
            </div>
            <div>
                {/* tech used */}
                <div className="flex space-x-5">
                {icons.map((Icon, index)=>{
                    // @ts-ignore
                    return <Icon size={28} key={index}/>
                })}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;