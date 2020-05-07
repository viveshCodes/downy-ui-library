const users = [
    {name : 'viv', premium:true},
    {name : 'vivesh', premium:true},
    {name : 'viveshCodes', premium:false},
    {name : 'viv-bhai', premium:false},
];

 //Method 1 to export :
        // export const getPremiumUsers = (users) =>{
        //     return users.filter(user => user.premium);
        // };

        // export default users; // There can be only one default


const getPremiumUsers = (users) =>{
    return users.filter(user => user.premium);
};

export {
    getPremiumUsers,
    users as default
};

// Note : We can have only one default export value per file