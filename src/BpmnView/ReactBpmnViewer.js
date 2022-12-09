import ReactBpmn from 'react-bpmn';

const ReactBpmnViewer = (props) => {

  const onShown = () => {
    console.log('ReactBpmnViewer: diagram shown');
  }

  const onLoading = () => {
    console.log('ReactBpmnViewer: diagram loading');
  }

  const onError = (err) => {
    console.log('ReactBpmnViewer: failed to show diagram');
  }

  return (
    <div style={{width: "100%", paddingTop: "1px"}}>
      <div style={{backgroundColor:"white"}}>Bpmn.io Bpmn Viewer</div>
      <ReactBpmn
        url="poc-process.bpmn"
        onShown={ onShown }
        onLoading={ onLoading }
        onError={ onError }
      />
    </div>
  )
}

export default ReactBpmnViewer