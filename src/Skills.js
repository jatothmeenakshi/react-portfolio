function Skills(){
    const skillsList=["c++","dsa","html","css","javascript","react"]
    return(
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skillsList.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
export default Skills;