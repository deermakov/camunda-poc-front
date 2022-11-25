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

const getCommonJsonRequestProps = () => {
  const headers = {Accept: "application/json", "Content-Type": "application/json;charset=UTF-8"};

  return {
    headers
  };
};