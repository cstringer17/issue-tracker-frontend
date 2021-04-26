import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header({HeaderTitle}) {

    return (
        <>
            <div className="h-52 w-screen bg-gray-700 text-center">
                <h1 className="text-4xl pt-12"> {HeaderTitle} </h1>
                <FontAwesomeIcon className="pt-6" icon="ticket-alt" size="4x"  />
            </div>
        </>
    );
}


