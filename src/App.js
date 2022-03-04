import { useRef, useEffect } from "react";
const style = {
  height: "90vh",
  width: "100%",
  borderWidth: "0px",
};
const container = {
  height: "90vh",
  width: "100%",
  borderWidth: "1px",
};
const h2 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: "#0c3160"
}
function App() {
  const sdkRef = useRef(null);
  const receiveSdkMessage = (event) => {
    const message = event?.data?.message; 
    switch (message) {
      case "onClose":
        console.log("onClose data ", event?.data)
        break;
          case "onError":
           console.log("onClose data ", event?.data)
        break;
      default:
        console.log("No event found iFrame");
    }
  };
  useEffect(() => {
    window.addEventListener("message", receiveSdkMessage, false);
  }, []);
  const handleSdkLoaded = () => {
    const sdkKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZGsiLCJqdGkiOiI0YWEyNGZlNS0yZThmLTRiNzUtOWRiYi00OTlmYjZkYmJhYjQiLCJpYXQiOjE2NDYzODM2NTl9.AmakuxSejgxaQfhDBS4PUvFORktmvHPvLhPHdrLAChQ";
    const message = JSON.stringify({
      sdkUrl: "SDK_URL",
      sdkKey: sdkKey,
      verifierID: "sasasas",
      message: "Message",
      notification: "Message",
      customData: { name: "Name" },
    });
    sdkRef.current.contentWindow.postMessage(
      { message: "onInit", value: message },
      "*"
    );
  };
  return (
    <div style={container}>
      <div>
      <h2 style={h2}>
        SDK client
      </h2>
        <iframe
          onLoad={handleSdkLoaded}
          ref={sdkRef}
          style={style}
          src={`http://localhost:3000/`}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
