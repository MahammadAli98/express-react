import React, { useEffect, useState, useContext, useTransition } from 'react';
import { UsersRoutes } from '../../routes/routes';
import AppContext from '../../context/AppContext';
import './Setion.css';

const Section1 = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const context = useContext(AppContext);
    const [iPending, startTransition] = useTransition()

    useEffect(() => {
        console.log(context.theme);
        setIsLoading(true);
        getUsers()
        // fetchUsers()
    }, []);

    const fetchUsers = () => {
        fetch('https://randomuser.me/api',
            {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + context.token },
                body: JSON.stringify({ "results": 10 })
            })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const getUser = () => {
        UsersRoutes.getUser().then((data) => {
            console.log(data);
        });
    }

    const getUsers = () => {
        console.log(iPending)

        startTransition(() => {
            console.log(iPending)
            UsersRoutes.getUsers(10).then((data) => {
                console.log(iPending)
                console.log(data.results)
                setData(data.results)
                // setIsLoading(false)
            })
        })
    }

    console.log(`out ${iPending}`)


    return (
        <div className={context.theme + ' div'}>
            <h1>Theme: {context.theme}</h1>
            <button onClick={() => context.changeTheme()}>Change theme</button>
            {
                iPending
                    ? "Loading..."
                    : <>
                        <h1>Today's users</h1>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1>{item.gender}</h1>
                                    <img src={item.picture.medium} alt="" />
                                    <h1>
                                        {item.name.first} {item.name.last}
                                    </h1>
                                </div>
                            );
                        })}
                    </>
            }
        </div>
    );
};

export default Section1;