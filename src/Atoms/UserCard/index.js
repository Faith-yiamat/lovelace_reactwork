import './index.css'
const UserCard = ({image,fullName, maidenName, age}) =>{
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        // borderBottom: '1px solid',
        padding: '10px'

    };
    const textStyle ={
        fontSize: '16px',
        fontWeight: 'bold'
    };
    const imageStyle = {
        width: '50px',
        height: 'auto',
        marginRight: '10px'
    };
    return(
        <div className="users"  style={cardStyle}>
            <img src={image} alt ={`${fullName} profile`} style={imageStyle}/>
            <h3 style={textStyle}> {fullName}</h3>
            <p>{ maidenName }</p>
            <p>{ age }</p>
        </div>
    );
};
export default UserCard;





