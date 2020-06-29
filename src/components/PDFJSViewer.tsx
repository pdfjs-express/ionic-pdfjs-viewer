import React from 'react';

interface ContainerProps {
    height: string;
    width: string;
    url?: string
}
const path = 'lib/web/viewer.html'

const PdfJSViewer: React.FC<ContainerProps> = ({ height, width, url }) => {
    let pdfPath = url ? path + '?file=' + url : path;
    
    return (
        <div style={{ width, height }}>
            {
                <iframe
                    width='100%'
                    height='100%'
                    src={pdfPath}
                >
                </iframe>
            }
        </div>
    )
}

export default PdfJSViewer