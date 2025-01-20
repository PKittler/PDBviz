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
            position: [-12.098,24.846,18.501],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-13.295,24.881,17.676],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-13.228,23.752,16.654],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-14.249,23.315,16.104],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-13.38,26.221,16.934],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-13.58,27.497,17.786],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-13.52,28.75,16.9],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-14.933,27.516,18.513],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-12.016,23.262,16.385],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-11.83,22.183,15.427],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-10.568,21.409,15.791],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-9.69,21.906,16.511],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-11.672,22.759,14.014],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-10.351,23.262,13.773],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-10.461,20.174,15.296],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-9.301,19.343,15.577],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-8.151,19.772,14.672],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-8.357,20.381,13.611],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-9.633,17.871,15.297],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-9.563,17.55,13.901],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-6.921,19.461,15.08],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.747,19.82,14.299],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-4.781,18.641,14.284],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.783,17.793,15.188],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.049,21.03,14.931],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.807,22.378,14.923],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.019,23.444,15.699],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-6.033,22.92,13.503],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.939,18.571,13.252],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.972,17.491,13.132],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-3.608,16.198,13.633],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.157,15.599,14.62],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.733,17.801,13.981],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.943,19.029,13.518],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.382,19.083,12.423],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.89,20.065,14.386],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.668,15.753,12.958],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.355,14.531,13.345],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-4.778,13.364,12.551],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.559,12.266,13.083],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-6.853,14.653,13.037],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-7.766,13.474,13.451],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-7.754,13.295,14.976],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-9.227,13.682,13.027],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.524,13.587,11.26],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.973,12.548,10.405],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.673,12.037,11.018],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.961,12.768,11.723],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.677,13.119,9.012],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.346,10.771,10.757],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.13,10.176,11.288],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.061,10.177,10.2],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.35,10.369,9.01],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.401,8.729,11.721],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.477,8.594,12.82],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.89,7.853,10.552],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.194,9.961,10.597],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.296,9.939,9.648],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [2.247,8.636,8.859],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.835,7.585,9.373],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.633,10.02,10.396],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.324,9.465,11.79],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.96,10.083,12.118],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.668,8.686,7.594],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.666,7.504,6.747],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.827,6.602,7.15],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.883,7.071,7.6],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.84,7.914,5.278],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.626,9.228,5.339],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.973,9.971,6.508],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.645,5.289,6.995],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.683,4.333,7.347],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.815,4.432,6.331],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.634,4.93,5.209],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.112,2.909,7.321],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.937,2.987,6.342],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.271,4.318,6.7],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.001,3.957,6.709],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.155,3.998,5.823],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [8.167,5.334,5.089],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.86,5.415,3.889],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.064,2.863,4.795],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.114,1.427,5.368],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.01,0.324,4.301],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.036,-0.994,5.025],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.865,-2.169,4.405],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.666,-2.162,3.089],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.891,-3.324,5.061],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.525,6.404,5.8],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.573,7.73,5.204],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [9.986,7.993,4.693],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.983,7.711,5.375],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.216,8.79,6.255],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.861,10.125,5.644],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.563,10.22,4.273],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.823,11.29,6.43],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.232,11.455,3.7],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.494,12.525,5.859],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.198,12.607,4.494],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.091,8.54,3.482],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.387,8.836,2.892],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [12.01,10.016,3.63],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [13.07,10.531,3.244],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.217,9.205,1.412],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.502,8.161,0.6],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.138,8.138,0.401],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.003,7.088,-0.068],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.869,7.06,-0.375],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.98,6.393,-0.682],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.358,10.46,4.704],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.859,11.58,5.486],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [11.841,11.201,6.964],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.895,10.569,7.457],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.963,12.807,5.275],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.066,13.371,3.865],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.153,13.894,3.517],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.055,13.281,3.127],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.892,11.584,7.69],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.984,11.278,9.109],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [12.322,12.4,9.903],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.412,12.456,11.138],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [14.457,11.172,9.527],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [15.102,12.471,9.598],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [15.357,10.345,8.604],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.647,13.31,9.201],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.976,14.426,9.851],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.002,13.881,10.889],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.611,14.578,11.838],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.196,15.243,8.813],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.353,14.422,7.993],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.594,12.621,10.723],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.665,11.996,11.651],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [9.187,10.611,12.019],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.807,9.597,11.414],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.286,11.852,10.995],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.367,11.341,9.658],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.067,10.549,13.019],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.632,9.283,13.455],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [9.572,8.506,14.229],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.352,8.734,15.428],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.836,9.536,14.373],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.565,10.915,14.984],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.032,11.724,13.798],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.899,7.576,13.551],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.866,6.774,14.186],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [8.41,5.372,14.439],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.668,4.448,14.805],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.641,6.676,13.266],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.847,6.054,11.866],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.827,4.52,11.951],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.756,6.47,10.868],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.718,5.195,14.245],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.347,3.901,14.455],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [10.648,3.731,15.94],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.878,2.614,16.429],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.661,3.824,13.666],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.566,3.8,12.122],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.968,3.845,11.496],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.87,2.538,11.592],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.652,4.84,16.68],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.926,4.799,18.108],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [9.733,4.179,18.826],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.582,4.288,18.377],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [11.145,6.222,18.64],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.906,7.139,18.485],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [12.292,6.982,17.939],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.03,8.49,19.209],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.993,3.516,19.953],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [8.932,2.883,20.723],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [8.427,3.865,21.773],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.061,4.894,22.054],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [9.473,1.632,21.428],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [10.161,1.947,22.647],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [7.274,3.561,22.37],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.695,4.425,23.387],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [5.651,5.326,22.738],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.911,6.051,23.42],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.577,5.292,21.408],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.619,6.11,20.68],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.819,5.217,19.738],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.582,5.163,19.794],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.357,7.173,19.855],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.573,6.654,19.256],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.806,8.421,20.621],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.518,4.502,18.855],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.863,3.615,17.907],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [3.065,2.568,18.676],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.913,2.257,18.338],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.913,2.907,17.04],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.846,3.825,16.453],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.67,2.007,19.724],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.006,0.996,20.531],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [2.11,1.687,21.554],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.456,2.74,22.109],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.05,0.151,21.273],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.941,1.1,21.815],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.004,1.669,22.773],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.18,3.151,22.467],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.159,4.005,23.367],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.556,1.519,24.197],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.365,3.477,21.187],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.552,4.86,20.776],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-1.778,4.949,19.873],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.979,4.119,18.974],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.678,5.347,19.998],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.802,6.889,19.829],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.84,7.363,18.808],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.472,6.443,18.225],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.007,8.588,18.605],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.616,5.96,20.101],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.818,6.144,19.302],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-3.445,6.092,17.825],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.166,5.517,16.997],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.447,7.51,19.61],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.78,7.858,18.906],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-6.884,6.88,19.33],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-6.272,9.275,19.239],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.308,6.694,17.474],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.851,6.709,16.093],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-1.09,5.418,15.808],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.137,5.418,15.632],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.915,7.902,15.863],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.076,8.761,17.121],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.207,7.722,18.24],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.811,4.297,15.76],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.193,3.008,15.496],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.086,2.213,14.55],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.865,1.345,14.974],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.032,2.226,16.806],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.096,1.027,16.732],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.864,0.736,15.803],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.085,-0.044,17.696],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.451,-0.456,16.157],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.914,-0.953,17.278],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.838,-0.285,18.853],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.163,-2.111,18.025],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.573,-1.45,19.585],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.422,-2.37,19.185],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.985,2.498,13.251],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.787,1.803,12.257],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.083,1.882,10.907],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.609,2.947,10.487],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.166,2.467,12.141],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.005,0.749,10.207],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.355,0.705,8.906],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.314,0.086,7.894],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.075,-0.841,8.209],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.087,-0.155,8.983],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.427,-0.639,7.61],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.091,0.602,9.625],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.288,0.591,6.66],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.157,0.079,5.612],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-2.298,-0.443,4.466],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-1.127,-0.067,4.313],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.061,1.202,5.088],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.057,1.793,6.107],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-5.941,2.908,5.518],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-6.925,3.477,6.551],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-7.726,4.544,5.958],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.873,-1.321,3.641],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.149,-1.886,2.512],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-1.646,-0.751,1.626],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.215,0.349,1.603],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.082,-2.785,1.691],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.187,-3.187,2.674],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-4.404,-1.913,3.496],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.568,-1.007,0.884],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [0.0,0.0,0.0],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [-0.02,-0.527,-1.43],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.002,-1.744,-1.672],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.451,0.291,0.405],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.645,0.924,1.814],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.096,1.159,2.242],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.964,0.776,1.414],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.347,1.697,3.345],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.059,0.386,-2.402],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.082,0.0,-3.805],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [1.358,-0.165,-4.3],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [1.592,-0.686,-5.413],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-0.774,1.088,-4.636],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.262,1.2,-4.331],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-3.003,0.239,-4.657],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [-2.665,2.246,-3.771],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [2.32,0.166,-3.445],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [3.721,0.0,-3.805],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [1, 1, 1]
            })
        }),

        new xeogl.Mesh({
            position: [4.09,-1.482,-3.958],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.723,-1.87,-4.923],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Oxygen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.67,0.696,-2.784],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [4.524,2.227,-2.668],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.494,2.857,-1.651],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [5.333,4.381,-1.558],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Carbon,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

        new xeogl.Mesh({
            position: [6.254,4.932,-0.568],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            geometry: Nitrogen,
            material: new xeogl.LambertMaterial({
                color: [0, 0, 0]
            })
        }),

   ]
});
