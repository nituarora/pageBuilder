const DataDisplay = ({ data, isFetching, refetch }) => {
    return (
      <div>
        {/* <button onClick={() => refetch()}>Refetch Data</button> */}
        <div>{isFetching ? 'Updating...' : 'Data is up-to-date'}</div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  
  export default DataDisplay;
  