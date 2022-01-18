const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px', overflowX:'hidden', }}>
            { props.children }
        </div>
    );
}
 
export default Scroll;