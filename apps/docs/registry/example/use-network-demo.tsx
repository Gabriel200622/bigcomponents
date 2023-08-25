import { useNetwork } from "@bigcomponents/hooks";

export default function UseNetworkDemo() {
  const networkStatus = useNetwork();

  return (
    <table className="max-w-[300px] mx-auto">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Online</td>
          <td>
            <p color={networkStatus.online ? "teal" : "red"}>
              {networkStatus.online ? "Online" : "Offline"}
            </p>
          </td>
        </tr>

        <tr>
          <td>rtt</td>
          <td>{networkStatus.rtt}</td>
        </tr>

        <tr>
          <td>downlink</td>
          <td>{networkStatus.downlink}</td>
        </tr>

        <tr>
          <td>effectiveType</td>
          <td>{networkStatus.effectiveType}</td>
        </tr>

        <tr>
          <td>saveData</td>
          <td>
            <p color={networkStatus.saveData ? "teal" : "red"}>
              {networkStatus.saveData ? "true" : "false"}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
