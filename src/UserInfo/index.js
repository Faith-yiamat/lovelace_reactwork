import React from "react";
import { useParams} from 'react-router-dom';

const UserInfo = () => {
    const { userId } = useParams();

    const user = {
        id: userId,
        fullName: "John Doe",
        image: user.image,
    };

    return(
        <div>
            <h2>User Details</h2>
            <p>Name: { user.fullName}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}