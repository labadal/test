{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var circle = document.createElement('div');\
circle.style.width = '100px';\
circle.style.height = '100px';\
circle.style.borderRadius = '50%';\
circle.style.backgroundColor = 'red';\
circle.style.position = 'absolute';\
document.body.appendChild(circle);\
\
document.addEventListener('mousemove', function(event) \{\
  var x = event.clientX;\
  var y = event.clientY;\
  setTimeout(function() \{\
    circle.style.top = (y - 50) + 'px';\
    circle.style.left = (x - 50) + 'px';\
  \}, 100);\
\});\
}