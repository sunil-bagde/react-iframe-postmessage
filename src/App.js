import { useRef, useLayoutEffect } from "react";
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
function App() {
  const sdkRef = useRef(null);

  useLayoutEffect(() => {}, []);

  const handleClick = () => {};
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
