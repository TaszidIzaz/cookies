    import { useHeaders } from 'next-headers';

    export default function HeaderModification() {
    const headers = useHeaders();

    const handleRequest = (req, res) => {
        const token = req.headers.get('Authorization');
        const newToken = `Bearer ${token}`;

        headers.append('Authorization', newToken);

        res.next();
    };

    return (
        <div>
        <h1>Header Modification</h1>
        <p>The Authorization header has been modified to:</p>
        <p>{headers.get('Authorization')}</p>
        </div>
    );
    }