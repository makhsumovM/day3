import { useEffect, useState } from "react";


function useTheme(){
    const [theme,setTheme]=useState(()=>{
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme:'light';
    });
    useEffect(()=>{
        if(theme==='dark'){
            document.body.classList.add('dark');
            
        }
        else{
            document.body.classList.remove('dark')
        }
        localStorage.setItem("theme",theme)
    },[theme])
    const toggleTheme = ()=>{
        setTheme(theme === 'light'?'dark':'light');
    }
    return {theme,toggleTheme};
}

export default useTheme;














// import React, { useState, useEffect } from 'react';

// const ThemeSwitcher = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Сохранение темы при перезагрузке страницы
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('darkMode');
//     if (savedTheme === 'true') {
//       setDarkMode(true);
//       document.body.classList.add('dark');
//     } else {
//       setDarkMode(false);
//       document.body.classList.remove('dark');
//     }
//   }, []);

//   // Переключение темы
//   const handleDarkMode = () => {
//     setDarkMode(true);
//     document.body.classList.add('dark');
//     localStorage.setItem('darkMode', 'true');
//   };

//   const handleLightMode = () => {
//     setDarkMode(false);
//     document.body.classList.remove('dark');
//     localStorage.setItem('darkMode', 'false');
//   };

//   return (
//     <div className="flex justify-center space-x-4">
//       <button 
//         onClick={handleLightMode} 
//         className={`py-2 px-4 rounded ${!darkMode ? 'bg-gray-300' : 'bg-gray-500'}`}
//       >
//         Светлая тема
//       </button>
//       <button 
//         onClick={handleDarkMode} 
//         className={`py-2 px-4 rounded ${darkMode ? 'bg-black text-white' : 'bg-gray-500 text-white'}`}
//       >
//         Темная тема
//       </button>
//     </div>
//   );
// };

// export default ThemeSwitcher;







