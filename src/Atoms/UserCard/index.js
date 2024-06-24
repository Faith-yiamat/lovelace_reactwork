import './index.css'
const UserCard = ({image,fullName, maidenName, age}) =>{
    

    const textStyle ={
        fontSize: '16px',
        fontWeight: 'bold'
    };
    const imageStyle = {
        width: '200px',
        height: 'auto',
        marginRight: '10px',
        border:' solid 1px',
        borderRadius: '20px',
        borderColor: 'purple'
    };
    return(
        <div className="users">
            <figure>
            <img src={image} alt ={`${fullName} profile`} style={imageStyle}/>
            <figcaption>
            <h3 style={textStyle}> {fullName}</h3>
            <p>{ maidenName }</p>
            <p>{ age }</p>
            </figcaption>
            </figure>
        </div>
    );
};
export default UserCard;





