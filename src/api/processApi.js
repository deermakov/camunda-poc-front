const startProcess = (processKey, processVariables = {}) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/start`,
    {method: "POST",
        ...getCommonJsonRequestProps(),
        body: JSON.stringify(processVariables && {variables: processVariables})
      }
    ).then(response => response.json());

export const getCommonJsonRequestProps = () => {
  const headers = {Accept: "application/json", "Content-Type": "application/json;charset=UTF-8"};

  return {
    headers
  };
};

export default startProcess;