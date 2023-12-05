import Icon from '../../assets/icon/pencil.svg';

export default function UploadIcon() {
    return(
        <>
            <img 
                src={Icon} 
                width="50vw" 
                height="50vw" 
                style={{position: 'fixed', right: 20, bottom: 20,}}/>
        </>
    )
}