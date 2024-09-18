import net from 'net';

function findAvailablePort(startPort, callback) {
    const server = net.createServer();
    server.unref();
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            findAvailablePort(startPort + 1, callback);
        } else {
            callback(err, null);
        }
    });
    server.listen(startPort, () => {
        const port = server.address().port;
        server.close(() => {
            callback(null, port);
        });
    });
}

findAvailablePort(3000, (err, port) => {
    if (err) {
        console.error('Error finding available port:', err);
    } else {
        console.log('Available port found:', port);
    }
});