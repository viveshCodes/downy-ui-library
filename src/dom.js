console.log('dom file');

const body = document.querySelector('body');

// use 'export' so that we can use it in the file where it's imported
//  export const styleBody = () =>{
//     body.style.background = 'peachpuff';
// };
const styleBody = () =>{
    body.style.background = 'peachpuff';
};

const addTitle = (text) =>{
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

styleBody();
addTitle('Introduction to Modules');

const greeting = "Hello JS Lovers";

// export everything at once
export {styleBody, addTitle, greeting};