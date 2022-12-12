import React from "react";
import { Link } from "react-router-dom";

const data = [
      {
        id: 1,
          title: "Lorem ipsum dolor sit amet,",
          status: "resolved",
          priority: "low",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        id: 2,
          title: "Nunc maximus, magna at ultricies elementum",
          status: "resolved",
          priority: "low",
          content:"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        id: 3,
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          status: "resolved",
          priority: "low",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        id: 4,
          title: "What is the package version",
          status: "resolved",
          priority: "low",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      }
    ];


const TickesItems = () => {

  const [tickets, setTickets] = React.useState(data);

  const fetchTickets = async () => {
    const res = await fetch("http://localhost:5000/tickets");
    const data = await res.json();
    setTickets(data);
  };

  // fetch data from the server
  React.useEffect(() => {
    fetchTickets();
  }, []);



  return (
    <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
      <div>
      {/* create a table to show tickets and buttons to edit them */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td className="border px-4 py-2">{ticket.title}</td>
              <td className="border px-4 py-2">{ticket.status}</td>
              <td className="border px-4 py-2">{ticket.priority}</td>
              <td className="border px-4 py-2">
                <Link to={`/dashboard/tickets/${ticket.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      <div>
        <h1 className="text-3xl font-bold text-white">Add a new ticket</h1>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-200">
                    Issue
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="text-gray-200" for="priority">
                    Priority
                  </label>
                    <select 
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select a priority</option>
                      <option value="low">Low</option>
                      <option value="medium">medium</option>
                      <option value="high">High</option>
                    </select>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="text-gray-200" for="status">
                    Status
                  </label>
                    <select 
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select a status</option>
                      <option value="resolved">Resolved</option>
                      <option value="hold">On hold</option>
                      <option value="handled">Handled</option>
                    </select>
                </div>
              </div>


              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-200"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TickesItems;
