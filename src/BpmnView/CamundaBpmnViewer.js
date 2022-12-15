import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler';
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css';
import {useEffect} from "react";
import {getBpmnFile} from "../api/processApi";

const CamundaBpmnViewer = (props) => {

  useEffect( () => {
    async function drawModeler(){
      console.log('CamundaBpmnViewer: diagram loading');

      const bpmnModeler = new BpmnModeler({
        container: '#camundaBpmCanvas',
        propertiesPanel: {
          parent: '#camundaBpmProperties'
        }
      });

      const bpmnFileContentProcessor = (text) => {
        bpmnModeler.importXML(text);
        console.log('CamundaBpmnViewer: diagram shown');
      }

      getBpmnFile(bpmnFileContentProcessor);
    }

    drawModeler();
  }, [])

  return (
    <div id="camundaBpmContent" style={{width: "100%", backgroundColor: "black", paddingTop: "1px"}}>
      <div style={{backgroundColor:"white"}}>Camunda Bpmn Viewer</div>
      <div>
      <div id="camundaBpmCanvas" style={{float: "left", width: "80%", height: "50vh"}}/>
      <div id="camundaBpmProperties" style={{float: "left", width: "20%", height: "100%"}}/>
      </div>
    </div>
  )
}

export default CamundaBpmnViewer