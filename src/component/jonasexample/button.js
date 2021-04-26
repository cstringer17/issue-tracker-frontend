export default function Button({ handleClicked, label }) {
    return (
        <div>
            <button onClick={handleClicked}>{label}</button>
        </div>
    );
}