export const startProcess = (processParams, processIdSetter) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/start`,
    {method: "POST",
        ...getCommonJsonRequestProps(),
        body: JSON.stringify(processParams)
      }
    ).then(response => response.json())
    .then(json => {console.log(json.processId); return json.processId})
    .then(processIdSetter)
    .catch((error) => {
      console.error(error);
    });

export const submitData = (processParams) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/input-data`,
    {method: "POST",
      ...getCommonJsonRequestProps(),
      body: JSON.stringify(processParams)
    }
  ).catch((error) => {
    console.error(error);
  });

export const terminate = (processParams) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/terminate`,
    {method: "POST",
      ...getCommonJsonRequestProps(),
      body: JSON.stringify(processParams)
    }
  ).catch((error) => {
    console.error(error);
  });

export const getTaskList = (assignee, taskListSetter) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/tasklist/${assignee}`,
    {method: "GET",
      ...getCommonJsonRequestProps()
    }
  ).then(response => response.json())
  .then(json => {console.log(json); return json;})
  .then(taskListSetter)
  .catch((error) => {
    console.error(error);
  });

export const getBpmnFile = (fileContentProcessor) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/bpmn-file`,
    {method: "GET",
      ...getCommonJsonRequestProps()
    }
  )
  .then(response => response.text())
  .then(fileContentProcessor)
  .catch((error) => {
    console.error(error);
  });

export const getHeatmap = (heatmapProcessor) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/heatmap`,
    {method: "GET",
      ...getCommonJsonRequestProps()
    }
  )
  .then(response => response.json())
  .then(heatmapProcessor)
  .catch((error) => {
    console.error(error);
  });

const getCommonJsonRequestProps = () => {
  const headers = {Accept: "application/json", "Content-Type": "application/json;charset=UTF-8"};

  return {
    headers
  };
};