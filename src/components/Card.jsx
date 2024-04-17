
export default function Card(props) {
    console.log(props);

    return (
        <div className="card flex items-center py-8 border-b border-gray-300 flex-col sm:flex-row">
            <img
                className="card-img sm:mr-10 rounded-lg m-auto block aspect-[4/5]"
                src={`images/${props.imageUrl}`} alt="China park"
            />

            <div className="mt-2">
                <div className="card-location flex  gap-2 sm:gap-4  items-center flex-col sm:flex-row ">
                    <p className="uppercase m-0">
                        <span className="text-red-400 text-lg mr-2">
                            <ion-icon name="location"></ion-icon>
                        </span>
                        {props.location}
                    </p>

                    <a
                        href={props.googleMapsUrl}
                        target="_blank"
                        className="text-gray-400 text-sm underline m-0">
                        View on Google Maps
                    </a>
                </div>
                
                <h1 className="text-4xl font-bold mt-5 mb-10 sm:mb-5 text-center sm:text-left">{props.title}</h1>

                <p className="font-bold">
                    {props.startDate} - {props.endDate}
                </p>

                <p className="text-gray-600 mt-2">
                    {props.description}
                </p>
            </div>
        </div>
    )
}