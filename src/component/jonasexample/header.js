import Button from "./button";

export default function Header({clicked}) {
    const handleClicked = () => {
        alert('clicked!')
    }

    return (
        <div>
            <Button onClick={handleClicked} label="Click me"/>
        </div>
    );
}