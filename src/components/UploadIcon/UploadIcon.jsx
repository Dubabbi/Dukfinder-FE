import Icon from '../../assets/icon/pencil.svg';

export default function UploadIcon() {
    return(
        <>
            <img 
                src={Icon} 
                width="50vw" 
                height="50vw" 
                style={{position: 'absolute', right: 20, bottom: 20,}}/>
        </>
    )
}