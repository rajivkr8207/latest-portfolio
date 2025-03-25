import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleContainer = ({par_network})=>{
    // console.log(par_network)
    const [init, setInit] = useState(false);

    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
    };
    const options = useMemo(
        ()=>({
            fullScreen : {
                enable : false},
            background: {
                color: {
                    value: ""
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                 },
                 modes:{
                    push: {
                        quantity: 90
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                 }
            },
            particles: {
                color:{
                    value: "#9333EA"
                },
                links: {
                    enable: true,
                    distance: 150,
                    opacity: 0.5,
                    width: 1,
                    color: '#9333EA'
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes:{
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 140,
                },
                opacity: {
                    value: 0.8,
                },
                shape: {
                    type: "square",

                },
                size: {
                    value:{
                        min: 1,
                        max: 5
                    }
                },
                
            },
            detectRetina: true

        })
    )

  if (init) {
    return (
      <Particles
      className="w-full h-full"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

    return(
        <>
        </>
    )
}

export default ParticleContainer;
