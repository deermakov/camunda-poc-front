import {useContext, useEffect, useRef} from "react";
import h337 from "../../node_modules/heatmap.js/build/heatmap";
import {getBpmnFile, getHeatmap} from "../api/processApi";
import {TaskListContext} from "../Form/Form";

const Heatmap = (props) => {

  // useRef() нужен потому, что значение heatmap задается в хуке useEffect(), но оно должно существовать и не меняться в течение
  // всего срока жизни компонента Heatmap (при всех его последующих рендерах)
  let heatmap = useRef();

  // useContext() тут только для того, чтобы компонент Heatmap обновлялся по кнопке "Get Tasklist"
  const [taskListRows, setTaskListRows] = useContext(TaskListContext);

  useEffect( () => {
    async function drawHeatmap(){

      // однократное создание heatmap instance
      if (heatmap.current == null) {
        heatmap.current = h337.create({
          container: document.querySelector('#heatmap'),
          gradient: {
            // enter n keys between 0 and 1 here
            // for gradient color customization
            '.2': 'blue',
            '.4': 'green',
            '.6': 'yellow',
            '.8': 'orange',
            '.95': 'red'
          },
          maxOpacity: .5,
          minaOpacity: .3
        });
      }

      const heatmapProcessor = (json) => {
        heatmap.current.setData(json);
        console.log("Heatmap drawn");
      }

      getHeatmap(heatmapProcessor);
    }

    drawHeatmap();
  })// никаких deps нет, чтобы heatmap перерисовывался при каждом рендере компонента Heatmap

  // pointerEvents: 'none' - чтобы события от мыши попадали в нижележащий div (= camundaBpmCanvas)
  return (
    <div id="heatmap" style={{pointerEvents: 'none'}}/>
  )
}

export default Heatmap