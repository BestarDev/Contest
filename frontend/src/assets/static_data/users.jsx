const users = [
    {
        _id: "1",
        name: "John",
        email: "john@email.com",
        password: '123456',
        photo: "/images/user1.png",
        submit: 100,
        accept: 40,
        contests: {
            'Code Marathon 1' : 3 ,'Code Marathon 2' : 3, 'Code Marathon 3' : 4
        },
        mark: 200
    },
    {
        _id: "1",
        name: "Anna",
        email: "anna@email.com",
        password: '123456',
        photo: "/images/user2.png",
        submit: 90,
        accept: 45,
        contests: {
            'Code Marathon 1' : 2 ,'Code Marathon 2' : 2, 'Code Marathon 3' : 2
        },
        mark: 300
    },
    {
        _id: "1",
        name: "Bestar",
        email: "bestar@email.com",
        password: '123456',
        photo: "/images/user3.png",
        submit: 50,
        accept: 40,
        contests: {
            'Code Marathon 1' : 1 ,'Code Marathon 2' : 1, 'Code Marathon 3' : 1
        },
        mark: 450
    },
    {
        _id: "1",
        name: "Alison",
        email: "alison@email.com",
        password: '123456',
        photo: "/images/defaultUser.png",
        submit: 120,
        accept: 35,
        contests: {
            'Code Marathon 1' : 4 ,'Code Marathon 2' : 4, 'Code Marathon 3' : 3
        },
        mark: 120
    }
]

export default users;