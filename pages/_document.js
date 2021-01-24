import Document , {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';

class MyDocument extends Document {
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width"></meta>
                    <meta name="description" content="E-commerce with NextJS"></meta>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument;