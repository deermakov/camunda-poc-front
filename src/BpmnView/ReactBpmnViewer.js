import ReactBpmn from 'react-bpmn';

const ReactBpmnViewer = (props) => {

  const bpmnFileUrl = `${process.env.REACT_APP_BACKEND_URL}/bpmn-file`

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
        url={bpmnFileUrl}
        onShown={ onShown }
        onLoading={ onLoading }
        onError={ onError }
      />
    </div>
  )
}

export default ReactBpmnViewer