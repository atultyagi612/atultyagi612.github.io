function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)&&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
// let bar =document.querySelector('.bar');

// function myFunction(id) {
//     var element = document.getElementById(id);
//     element.classList.add("animate-progress-line");
//   }
// function myFunction1(id) {
//     var element = document.getElementById(id);
//     element.classList.add("animate-info-span");
//   }
// function myFunction2(id) {
//     var element = document.getElementById(id);
//     element.classList.add("in-left");
//   }

//   function ebs(){

//     if(isElementInViewport(bar)){
//       myFunction('python');
//       myFunction1('info1');
//       myFunction('java');
//       myFunction1('info2');
//       myFunction('C-C-Plus-Plus');
//       myFunction1('info3');
//       myFunction('html-css');
//       myFunction1('info4');
//       myFunction('nodejs');
//       myFunction1('info6');

//       // document.removeEventListener("scroll", ebs);

      
//   }
//   }
// document.addEventListener('scroll', ebs);


function acttt(){

    if(isElementInViewport(document.querySelector('#skills_cloud'))){ 
        chart.resize()
        document.removeEventListener("scroll", acttt);
        document.getElementById('skills_cloud').style.opacity=1
    }
}
document.addEventListener('scroll', acttt);

let  secondary_color= window.getComputedStyle(document.documentElement).getPropertyValue('--secondary_color');
let  secondary_color_lower= window.getComputedStyle(document.documentElement).getPropertyValue('--secondary_color_lower');
let  third_color= window.getComputedStyle(document.documentElement).getPropertyValue('--third_color');
let  fourth_color= window.getComputedStyle(document.documentElement).getPropertyValue('--fourth_color');
let  pcsize1= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize1'));
let  pcsize2= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize2'));
let  pcsize3= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize3'));
let  pcsize4= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize4'));

function update_cloud_values(){
     secondary_color= window.getComputedStyle(document.documentElement).getPropertyValue('--secondary_color');
     secondary_color_lower= window.getComputedStyle(document.documentElement).getPropertyValue('--secondary_color_lower');
     third_color= window.getComputedStyle(document.documentElement).getPropertyValue('--third_color');
     fourth_color= window.getComputedStyle(document.documentElement).getPropertyValue('--fourth_color');
     pcsize1= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize1'));
     pcsize2= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize2'));
     pcsize3= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize3'));
     pcsize4= parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--pcsize4'));


     option = {
        tooltip: {},
        series: [ {
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [pcsize1, pcsize2],
        silent: true,
        rotationRange: [-50, 90],
        shape: 'circle',
        width: pcsize3,
        height: pcsize4,
        layoutAnimation: true,
        drawOutOfBound: true,
        textStyle: {
           normal: {
               color: function () {
                   return  fourth_color;
               }
           },
           emphasis: {
            //    shadowBlur: 1,
            //    shadowColor: '#333'
           }
        },
        data: [
           {
               name: 'Machine Learning',
               value: 800,
               textStyle: {
                   normal: {
                       color: secondary_color
                   },
                   emphasis: {
                       color: 'red'
                   }
               }
           },
           {
               name: 'Deep Learning',
               value: 650,
               textStyle: {
                   normal: {
                       color: secondary_color_lower
                   }
               }
           },
           {
               name: 'Computer Vision',
               value: 400,
           },
           {
               name: 'ANN',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'CNN',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'RNN',
               value: 300,
           },
           {
               name: 'Neural Network',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'Sklearn',
               value: 700,
               textStyle: {
                normal: {
                    color: secondary_color_lower
                }
            }
           },
           {
               name: 'Tensorflow',
               value: 500,
           },
           {
               name: 'ANN',
               value: 500,
           },
           {
               name: 'Python Language',
               value: 1000,
               textStyle: {
                normal: {
                    color: secondary_color
                }
            }
           },
           {
               name: 'Tkinter',
               value: 800,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'Flask',
               value: 700,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'C language',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'C++ language',
               value: 500,
           },
           {
               name: 'Java Language',
               value: 700,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'Swing',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'Javascript Language',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'HTML',
               value: 700,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
               name: 'CSS',
               value: 800,
               textStyle: {
                normal: {
                    color: secondary_color_lower
                }
            }
           },
           {
               name: 'Bootstrap',
               value: 500,
           },
           {
               name: 'NodeJS',
               value: 500,
           },
           {
               name: 'Express',
               value: 400,
           },
           {
               name: 'EJS',
               value: 600,
           },
           
           {
               name: 'MongoDB',
               value: 500,
           },
           {
               name: 'Mysql',
               value: 700,
               textStyle: {
                normal: {
                    color: secondary_color_lower
                }
            }
           },
           {
               name: 'Postman Tool',
               value: 500,
           },
           {
               name: 'Figma Tool',
               value: 600,
               textStyle: {
                normal: {
                    color: third_color
                }
            }
           },
           {
            name: 'Heroku',
            value: 600,
            textStyle: {
             normal: {
                 color: third_color
             }
         }
        },
        {
          name: 'IBM Cloud',
          value: 700,
          textStyle: {
           normal: {
               color: secondary_color_lower
           }
        }
        },
        {
          name: 'GitHub',
          value: 600,
          textStyle: {
           normal: {
               color: third_color
           }
        }
        }
        ]
        } ]
        };
}

var chart = echarts.init(document.getElementById('skills_cloud'));

var option = {
tooltip: {},
series: [ {
type: 'wordCloud',
gridSize: 20,
sizeRange: [pcsize1, pcsize2],
silent: true,
rotationRange: [-50, 90],
shape: 'circle',
width: pcsize3,
height: pcsize4,
layoutAnimation: true,
drawOutOfBound: false,
textStyle: {
   normal: {
       color: function () {
           return  fourth_color;
       }
   },
   emphasis: {
    //    shadowBlur: 1,
    //    shadowColor: '#333'
   }
},
data: [
   {
       name: 'Machine Learning',
       value: 800,
       textStyle: {
           normal: {
               color: secondary_color
           },
           emphasis: {
               color: 'red'
           }
       }
   },
   {
       name: 'Deep Learning',
       value: 650,
       textStyle: {
           normal: {
               color: secondary_color_lower
           }
       }
   },
   {
       name: 'Computer Vision',
       value: 400,
   },
   {
       name: 'ANN',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'CNN',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'RNN',
       value: 300,
   },
   {
       name: 'Neural Network',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'Sklearn',
       value: 700,
       textStyle: {
        normal: {
            color: secondary_color_lower
        }
    }
   },
   {
       name: 'Tensorflow',
       value: 500,
   },
   {
       name: 'ANN',
       value: 500,
   },
   {
       name: 'Python Language',
       value: 1000,
       textStyle: {
        normal: {
            color: secondary_color
        }
    }
   },
   {
       name: 'Tkinter',
       value: 800,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'Flask',
       value: 700,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'C language',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'C++ language',
       value: 500,
   },
   {
       name: 'Java Language',
       value: 700,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'Swing',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'Javascript Language',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'HTML',
       value: 700,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
       name: 'CSS',
       value: 800,
       textStyle: {
        normal: {
            color: secondary_color_lower
        }
    }
   },
   {
       name: 'Bootstrap',
       value: 500,
   },
   {
       name: 'NodeJS',
       value: 500,
   },
   {
       name: 'Express',
       value: 400,
   },
   {
       name: 'EJS',
       value: 600,
   },
   
   {
       name: 'MongoDB',
       value: 500,
   },
   {
       name: 'Mysql',
       value: 700,
       textStyle: {
        normal: {
            color: secondary_color_lower
        }
    }
   },
   {
       name: 'Postman Tool',
       value: 500,
   },
   {
       name: 'Figma Tool',
       value: 600,
       textStyle: {
        normal: {
            color: third_color
        }
    }
   },
   {
    name: 'Heroku',
    value: 600,
    textStyle: {
     normal: {
         color: third_color
     }
 }
},
{
  name: 'IBM Cloud',
  value: 700,
  textStyle: {
   normal: {
       color: secondary_color_lower
   }
}
},
{
  name: 'GitHub',
  value: 600,
  textStyle: {
   normal: {
       color: third_color
   }
}
}
]
} ]
};

chart.setOption(option);

// window.onresize = chart.resize;


 
         