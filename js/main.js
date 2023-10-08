flag=true
$("div#smenu").on("click", () => {
    if (flag == true) {
        $("div#sec1").css({
            width:"18px",
            height:"1px",
            top: "calc(50% - 1px / 2)",
            transform: "rotate(-45deg)",
            transition: "450ms"
        })
        $("div#sec2").css({
            width:"18px",
            height:"1px",
            top: "calc(50% - 1px / 2)",
            transform: "rotate(45deg)",
            transition:"450ms"
        })
        $("div.smallmenu").css({
            opacity: "1",
            transform: "rotatex(0deg)",
            transition:"500ms",
        })
        $("div.smallmenu>div:nth-of-type(2)>ul").css({
            opacity: "1",
            transform: "translateY(0)",
            transition:"500ms",
        })
        flag=false
    } else {
        $("div#sec1").css({
            width:"15px",
            height:"2px",
            top: "20px",
            transform: "rotate(0deg)",
            transition:"200ms"
        })
        $("div#sec2").css({
            width:"15px",
            height:"2px",
            top: "26px",
            transform: "rotate(0deg)",
            transition:"200ms"
        })
        $("div.smallmenu").css({
            transform: "rotatex(90deg)",
            transition:"600ms",
        })
        $("div.smallmenu>div:nth-of-type(2)>ul").css({
            opacity: "0",
            transform: "translateY(-10px)",
            transitionDelay:"0ms",
            transition:"200ms",
        })
        flag=true
    }
})

footer1=true
$("div.footer2-2>ul>li:nth-of-type(1)").on("click", () => {
    if (footer1 == true) {
        $("div.footer2-2>ul>li:nth-of-type(1)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(1)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter1").slideDown(400)
        footer1=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(1)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(1)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter1").css({
            display:"none",
        })
        footer1=true
    }
})
footer2=true
$("div.footer2-2>ul>li:nth-of-type(2)").on("click", () => {
    if (footer2 == true) {
        $("div.footer2-2>ul>li:nth-of-type(2)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(2)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter2").slideDown(400)
        
        footer2=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(2)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(2)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter2").css({
            display:"none",
        })
        footer2=true
    }
})
footer3=true
$("div.footer2-2>ul>li:nth-of-type(3)").on("click", () => {
    if (footer3 == true) {
        $("div.footer2-2>ul>li:nth-of-type(3)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(3)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter3").slideDown(400)
        
        footer3=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(3)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(3)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter3").css({
            display:"none",
        })
        footer3=true
    }
})
footer4=true
$("div.footer2-2>ul>li:nth-of-type(4)").on("click", () => {
    if (footer4 == true) {
        $("div.footer2-2>ul>li:nth-of-type(4)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(4)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter4").slideDown(400)
        
        footer4=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(4)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(4)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter4").css({
            display:"none",
        })
        footer4=true
    }
})
footer5=true
$("div.footer2-2>ul>li:nth-of-type(5)").on("click", () => {
    if (footer5 == true) {
        $("div.footer2-2>ul>li:nth-of-type(5)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(5)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter5").slideDown(400)
        footer5=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(5)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(5)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter5").css({
            display:"none",
        })
        footer5=true
    }
})
footer6=true
$("div.footer2-2>ul>li:nth-of-type(6)").on("click", () => {
    if (footer6 == true) {
        $("div.footer2-2>ul>li:nth-of-type(6)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(6)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter6").slideDown(400)
        footer6=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(6)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(6)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter6").css({
            display:"none",
        })
        footer6=true
    }
})
footer7=true
$("div.footer2-2>ul>li:nth-of-type(7)").on("click", () => {
    if (footer7 == true) {
        $("div.footer2-2>ul>li:nth-of-type(7)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(7)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter7").slideDown(400)
        footer7=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(7)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(7)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter7").css({
            display:"none",
        })
        footer7=true
    }
})
footer8=true
$("div.footer2-2>ul>li:nth-of-type(8)").on("click", () => {
    if (footer8 == true) {
        $("div.footer2-2>ul>li:nth-of-type(8)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(8)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter8").slideDown(400)
        footer8=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(8)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(8)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter8").css({
            display:"none",
        })
        footer8=true
    }
})
footer9=true
$("div.footer2-2>ul>li:nth-of-type(9)").on("click", () => {
    if (footer9 == true) {
        $("div.footer2-2>ul>li:nth-of-type(9)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(9)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter9").slideDown(400)
        footer9=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(9)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(9)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter9").css({
            display:"none",
        })
        footer9=true
    }
})
footer10=true
$("div.footer2-2>ul>li:nth-of-type(10)").on("click", () => {
    if (footer10 == true) {
        $("div.footer2-2>ul>li:nth-of-type(10)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(10)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter10").slideDown(400)
        footer10=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(10)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(10)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter10").css({
            display:"none",
        })
        footer10=true
    }
})
footer11=true
$("div.footer2-2>ul>li:nth-of-type(11)").on("click", () => {
    if (footer11 == true) {
        $("div.footer2-2>ul>li:nth-of-type(11)").css({
            borderTop: "4px solid #62ADF8",
            borderBottom: "4px solid #62ADF8",
            borderLeft: "2px solid #62ADF8",
            borderRight: "2px solid #62ADF8",
        })
        $("div.footer2-2>ul>li:nth-of-type(11)>span").css({
            transform: "rotate(45deg)",
            transition: "300ms",
        })
        $("div.smallfooter11").slideDown(400)
        footer11=false
    } else {
        $("div.footer2-2>ul>li:nth-of-type(11)").css({
            borderTop: "none",
            borderBottom: "1px solid #D2D2D7",
            borderLeft:"none",
            borderRight:"none",
        })
        $("div.footer2-2>ul>li:nth-of-type(11)>span").css({
            transform: "rotate(0deg)",
            transition:"300ms",
        })
        $("div.smallfooter11").css({
            display:"none",
        })
        footer11=true
    }
})