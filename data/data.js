var Molecule = new xeogl.Group({
    id: "molecule",
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    scale: [1, 1, 1],

    children: [
        new xeogl.Mesh({
            geometry: x_obj_axis,
            material: new xeogl.PhongMaterial({
                emissive: [1,0,0],
                diffuse: [1, 0.0, 0.0],
                lineWidth: 10
            })
        }),

        new xeogl.Mesh({
            geometry: y_obj_axis,
            material: new xeogl.PhongMaterial({
                emissive: [0,1,0],
                diffuse: [0.0, 1, 0.0],
                lineWidth: 10
            })
        }),

        new xeogl.Mesh({
            geometry: z_obj_axis,
            material: new xeogl.PhongMaterial({
                emissive: [0,0,1],
                diffuse: [0.0, 0.0, 1],
                lineWidth: 10
            })
        }),

        new xeogl.Mesh({
            position: [4.371,8.845,-11.942],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [4.351,9.648,-10.729],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [2.913,9.772,-10.239],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [2.556,10.713,-9.515],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.901,11.05,-11.022],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [4.796,7.917,-11.919],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [4.961,9.159,-9.941],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [2.065,8.819,-10.628],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [0.668,8.833,-10.222],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [0.551,8.225,-8.828],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [1.083,7.14,-8.55],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.17,8.002,-11.202],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [2.403,8.062,-11.224],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [0.293,9.877,-10.193],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.151,8.919,-7.931],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-0.33,8.437,-6.571],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-1.669,8.937,-6.039],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-2.438,9.601,-6.749],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.794,8.971,-5.674],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-0.571,9.808,-8.205],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.329,7.327,-6.559],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-1.965,8.623,-4.777],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-3.215,9.047,-4.164],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-3.022,10.427,-3.545],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-1.906,10.814,-3.166],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.618,8.057,-3.062],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-1.302,8.075,-4.23],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-4.014,9.104,-4.932],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-4.11,11.189,-3.434],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-4.046,12.524,-2.859],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-4.57,12.474,-1.428],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-4.756,13.51,-0.772],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.916,13.488,-3.677],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-5.008,10.829,-3.759],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.995,12.881,-2.846],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-4.817,11.264,-0.924],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-5.32,11.095,0.43],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-4.171,11.285,1.414],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-4.378,11.449,2.625],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.896,9.683,0.601],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-4.65,10.439,-1.501],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-6.105,11.851,0.64],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.939,11.265,0.904],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-1.766,11.436,1.747],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-1.628,12.91,2.113],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-2.169,13.797,1.436],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.508,10.99,0.99],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-2.816,11.128,-0.1],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-1.879,10.842,2.678],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.9,13.192,3.195],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-0.7,14.562,3.639],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [0.762,14.75,4.027],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [1.101,14.914,5.208],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.582,14.85,4.862],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-0.474,12.429,3.722],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.95,15.266,2.818],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [1.651,14.728,3.033],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [3.074,14.896,3.284],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.3,16.231,3.986],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [2.592,17.219,3.738],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.844,14.894,1.957],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [1.327,14.59,2.076],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.443,14.078,3.937],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [4.293,16.278,4.875],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [4.6,17.498,5.605],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.098,18.553,4.623],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.563,18.238,3.517],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.698,17.225,6.642],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [4.85,15.441,5.047],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.688,17.877,6.111],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.006,19.825,5.014],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [5.449,20.915,4.16],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.969,20.876,4.053],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [7.67,20.426,4.972],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.025,22.26,4.766],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [4.616,20.037,5.933],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.012,20.803,3.146],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [7.501,21.348,2.925],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [8.94,21.361,2.712],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [9.607,22.095,3.87],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.717,21.749,4.301],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.269,22.09,1.403],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.886,21.709,2.195],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [9.326,20.321,2.673],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [8.936,23.123,4.392],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [9.474,23.897,5.5],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [9.85,22.947,6.632],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [8.993,22.27,7.218],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.418,24.887,6.008],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [8.025,23.372,4.006],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.382,24.446,5.172],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.142,22.886,6.956],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [11.617,22.015,8.021],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [11.941,22.862,9.247],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.91,23.635,9.26],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.887,21.282,7.57],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [11.813,23.462,6.447],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.83,21.28,8.287],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.131,22.726,10.298],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [11.343,23.482,11.522],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.407,22.782,12.36],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.21,21.658,12.845],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.038,23.552,12.327],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.345,22.077,10.242],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.692,24.508,11.278],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [13.553,23.44,12.542],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [14.639,22.87,13.324],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [14.58,23.433,14.74],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [15.449,23.158,15.581],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [15.988,23.243,12.695],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [13.671,24.363,12.124],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [14.534,21.766,13.369],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [13.549,24.231,15.023],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [13.389,24.825,16.341],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.729,23.809,17.267],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.453,22.665,16.877],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.498,26.07,16.249],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.858,24.429,14.299],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [14.382,25.1,16.755],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [12.467,24.215,18.509],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [11.839,23.332,19.48],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.64,24.045,20.097],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.643,24.404,21.283],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.837,22.981,20.591],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [12.711,25.167,18.786],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.489,22.406,18.978],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [9.595,24.259,19.296],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [8.397,24.93,19.775],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [7.572,23.945,20.597],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [7.998,22.812,20.866],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.557,25.414,18.586],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [9.637,23.946,18.326],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [8.676,25.791,20.417],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [6.374,24.365,21.007],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [5.5,23.512,21.797],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [4.88,22.458,20.887],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [4.425,21.398,21.342],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.38,24.35,22.427],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.064,25.306,20.762],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [6.085,23.004,22.592],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [4.853,22.736,19.583],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [4.285,21.806,18.62],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.335,21.483,17.562],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.25,22.277,17.297],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.066,22.439,17.936],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.239,23.622,19.253],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.987,20.867,19.131],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.218,20.308,16.943],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [6.162,19.893,15.917],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.583,20.224,14.546],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.166,19.897,13.502],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.402,18.38,16.006],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [4.45,19.685,17.194],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [7.122,20.436,16.044],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [4.421,20.879,14.531],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [3.774,21.248,13.281],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.305,19.982,12.573],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.053,19.977,11.359],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.768,21.988,12.376],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.977,21.128,15.415],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [2.895,21.894,13.487],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.181,18.887,13.325],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [2.742,17.622,12.758],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.894,17.002,11.976],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.692,16.313,10.964],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.562,17.858,11.805],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.4,18.938,14.321],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [2.44,16.928,13.569],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.123,17.238,12.436],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [6.299,16.697,11.771],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.921,15.624,12.658],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [7.958,15.032,12.325],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.328,17.811,11.539],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.243,17.81,13.272],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [6.01,16.241,10.802],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [6.294,15.359,13.805],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [6.796,14.355,14.73],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.914,13.022,14.0],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.111,12.699,13.111],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.824,14.196,15.907],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [5.443,15.872,14.038],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [7.798,14.653,15.104],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [7.92,12.227,14.367],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [8.13,10.931,13.74],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.927,10.04,14.026],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.564,9.167,13.224],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.39,10.27,14.316],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [8.556,12.534,15.104],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [8.235,11.055,12.642],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [6.29,10.248,15.179],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [5.128,9.458,15.558],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.987,9.759,14.594],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.869,10.872,14.06],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.689,9.824,16.982],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [6.623,10.978,15.81],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.372,8.377,15.503],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.128,8.767,14.357],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [2.0,8.939,13.454],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [0.747,9.224,14.274],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [0.676,8.918,15.474],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.782,7.658,12.638],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [3.264,7.867,14.818],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [2.188,9.794,12.772],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.263,9.817,13.635],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-1.508,10.138,14.316],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-2.676,9.83,13.386],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-3.388,10.733,12.923],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.537,11.629,14.678],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-0.161,10.051,12.647],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-1.606,9.523,15.236],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.889,8.544,13.1],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-3.975,8.132,12.224],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-5.303,8.529,12.859],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-5.467,8.496,14.087],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.946,6.609,12.038],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-2.277,7.835,13.505],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-3.879,8.636,11.24],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-6.272,8.912,12.026],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-7.581,9.313,12.518],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-8.515,8.109,12.482],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-9.747,8.248,12.479],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-8.158,10.42,11.626],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-6.091,8.924,11.022],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-7.497,9.675,13.564],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-7.939,6.907,12.454],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-8.73,5.687,12.419],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-9.469,5.535,13.744],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-8.999,5.984,14.8],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-7.813,4.473,12.216],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-6.921,6.84,12.458],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-9.473,5.741,11.596],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.639,4.897,13.707],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [11.431,4.693,14.91],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [11.339,3.229,15.323],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [11.024,2.901,16.476],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.9,5.044,14.635],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.987,4.544,12.815],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.039,5.326,15.733],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.615,2.324,14.382],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [11.56,0.898,14.661],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.664,0.224,13.627],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.446,0.746,12.524],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.967,0.292,14.573],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [11.871,2.639,13.446],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.136,0.726,15.673],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.132,-0.949,13.972],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-9.261,-1.683,13.066],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-9.95,-1.812,11.712],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [11.112,-2.234,11.616],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-8.99,-3.086,13.624],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.339,-1.341,14.891],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-8.304,-1.136,12.935],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-9.239,-1.449,10.644],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-9.793,-1.529,9.301],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-8.721,-2.053,8.352],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-7.523,-2.058,8.671],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.236,-0.136,8.834],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-8.286,-1.107,10.77],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.658,-2.225,9.289],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-9.139,-2.503,7.168],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-8.206,-3.027,6.183],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-7.667,-1.867,5.341],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-7.985,-1.754,4.136],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-8.922,-4.023,5.261],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [10.135,-2.48,6.949],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-7.357,-3.528,6.694],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-6.772,-1.077,5.925],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [0.25, 0.67, 0.94]
            })
        }),

        new xeogl.Mesh({
            position: [-6.165,0.025,5.191],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-5.27,-0.484,4.052],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-5.35,-0.005,2.936],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.366,0.978,6.129],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.PhongMaterial({
                diffuse: [0.3, 0.3, 0.3]
            })
        }),

        new xeogl.Mesh({
            position: [-6.505,-1.245,6.904],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-6.922,0.672,4.746],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Hydrogen,
            material: new xeogl.PhongMaterial({
                diffuse: [1, 1, 1]
            })
        }),

   ]
});
