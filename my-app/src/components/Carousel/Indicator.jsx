export default function Indicator({activeIndex,indicatorCount}){
    return(<>
        <div  className="indicator-section">
            {Array.from({length : indicatorCount},(_,i)=>(
                <div className={`indicator ${activeIndex==i?"active":""}`}></div>
            ))}
        </div>
        </>)

}