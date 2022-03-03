import React from "react";

const Cursor = () => {
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
    });

    a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorinner.classList.add('cursorhover');
    });
    item.addEventListener('mouseleave', () => {
        cursorinner.classList.remove('cursorhover');
    });
    })
    return (
        <>
            <div className="cursor2"></div>
        </>
    )
}

export default Cursor;