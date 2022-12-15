import {useEffect} from "react";
import h337 from "../../node_modules/heatmap.js/build/heatmap";
import {getBpmnFile, getHeatmap} from "../api/processApi";

const Heatmap = (props) => {

  useEffect( () => {
    async function drawHeatmap(){
      const heatmap = h337.create({
        container: document.querySelector('#heatmap'),
        gradient: {
          // enter n keys between 0 and 1 here
          // for gradient color customization
          '.2': 'blue',
          '.4': 'red',
          '.6': 'orange',
          '.8': 'yellow',
          '.95': 'white'
        }
      });

      const heatmapProcessor = (json) => {
        heatmap.setData(json);
        console.log("Heatmap drawn");
      }

      getHeatmap(heatmapProcessor);
    }

    drawHeatmap();
  }, [])

  // pointerEvents: 'none' - чтобы события от мыши попадали в нижележащий div (= camundaBpmCanvas)
  return (
    <div id="heatmap" style={{pointerEvents: 'none'}}/>
  )
}

export default Heatmap