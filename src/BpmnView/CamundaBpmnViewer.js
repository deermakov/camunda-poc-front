import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler';
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css';
import {useEffect} from "react";

const CamundaBpmnViewer = (props) => {

  const unchangeable = 123;

  useEffect( () => {
    async function drawModeler(){
      var bpmnModeler = new BpmnModeler({
        container: '#camundaBpmCanvas',
        propertiesPanel: {
          parent: '#camundaBpmProperties'
        }
      });

      try {
        fetch("./poc-process.bpmn")
          .then(response => response.text())
          .then(text => bpmnModeler.importXML(text));
        console.log('CamundaBpmnViewer: success!');
      } catch (err) {
        console.error('CamundaBpmnViewer: something went wrong:', err);
      }
    }
    drawModeler();
  }, [unchangeable])

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