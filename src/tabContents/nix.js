const nix = () => {
    const commands = [
        { name: 'ls', sample: 'ls -la', description: 'List directory contents' },
        { name: 'cd', sample: 'cd /home/user', description: 'Change directory' },
        { name: 'pwd', sample: 'pwd', description: 'Print working directory' },
        { name: 'mkdir', sample: 'mkdir new_folder', description: 'Create a new directory' },
        { name: 'rm', sample: 'rm file.txt', description: 'Remove files or directories' },
        { name: 'cp', sample: 'cp file.txt /backup/', description: 'Copy files or directories' },
        { name: 'mv', sample: 'mv old_name.txt new_name.txt', description: 'Move or rename files or directories' },
        { name: 'touch', sample: 'touch new_file.txt', description: 'Create an empty file or update file timestamps' },
        { name: 'cat', sample: 'cat file.txt', description: 'Concatenate and display file contents' },
        { name: 'grep', sample: 'grep "pattern" file.txt', description: 'Search for patterns in files' },
        { name: 'find', sample: 'find /home -name "*.txt"', description: 'Search for files and directories' },
        { name: 'chmod', sample: 'chmod 755 script.sh', description: 'Change file permissions' },
        { name: 'chown', sample: 'chown user:group file.txt', description: 'Change file ownership' },
        { name: 'sudo', sample: 'sudo apt-get update', description: 'Execute a command as a superuser' },
        { name: 'apt-get', sample: 'apt-get install package_name', description: 'Package management for Debian-based systems' },
        { name: 'yum', sample: 'yum install package_name', description: 'Package management for RPM-based systems' },
        { name: 'tar', sample: 'tar -cvf archive.tar files/', description: 'Create or extract archive files' },
        { name: 'gzip', sample: 'gzip file.txt', description: 'Compress or decompress files' },
        { name: 'ssh', sample: 'ssh user@hostname', description: 'Secure shell remote login' },
        { name: 'scp', sample: 'scp file.txt user@remote:/path/', description: 'Securely copy files between hosts' },
        { name: 'wget', sample: 'wget https://example.com/file.zip', description: 'Download files from the web' },
        { name: 'curl', sample: 'curl -O https://example.com/file.zip', description: 'Transfer data from or to a server' },
        { name: 'ping', sample: 'ping google.com', description: 'Test network connectivity' },
        { name: 'ifconfig', sample: 'ifconfig', description: 'Configure network interfaces' },
        { name: 'netstat', sample: 'netstat -tuln', description: 'Display network connections and statistics' },
        { name: 'ps', sample: 'ps aux', description: 'Display information about running processes' },
        { name: 'top', sample: 'top', description: 'Display and manage the top processes' },
        { name: 'kill', sample: 'kill -9 1234', description: 'Terminate processes' },
        { name: 'df', sample: 'df -h', description: 'Display disk space usage' },
        { name: 'du', sample: 'du -sh *', description: 'Estimate file and directory space usage' },
        { name: 'free', sample: 'free -h', description: 'Display amount of free and used memory' },
        { name: 'uname', sample: 'uname -a', description: 'Print system information' },
        { name: 'history', sample: 'history', description: 'Display command history' },
        { name: 'man', sample: 'man ls', description: 'Display the manual page for a command' },
        { name: 'tail', sample: 'tail -f /var/log/syslog', description: 'Output the last part of files' },
        { name: 'head', sample: 'head -n 10 file.txt', description: 'Output the first part of files' },
        { name: 'less', sample: 'less file.txt', description: 'View file contents one screen at a time' },
        { name: 'sed', sample: "sed 's/old/new/g' file.txt", description: 'Stream editor for filtering and transforming text' },
        { name: 'awk', sample: "awk '{print $1}' file.txt", description: 'Pattern scanning and text processing' },
        { name: 'sort', sample: 'sort file.txt', description: 'Sort lines of text files' },
        { name: 'uniq', sample: 'uniq -c file.txt', description: 'Report or omit repeated lines' },
        { name: 'wc', sample: 'wc -l file.txt', description: 'Print newline, word, and byte counts' },
        { name: 'diff', sample: 'diff file1.txt file2.txt', description: 'Compare files line by line' },
        { name: 'vi', sample: 'vi file.txt', description: 'Text editor' },
        { name: 'nano', sample: 'nano file.txt', description: 'Simple command-line text editor' },
        { name: 'alias', sample: 'alias ll="ls -la"', description: 'Create command aliases' },
        { name: 'echo', sample: 'echo "Hello, World!"', description: 'Display a line of text' },
        { name: 'cron', sample: 'crontab -e', description: 'Schedule commands to run periodically' },
        { name: 'passwd', sample: 'passwd', description: 'Change user password' },
        { name: 'w', sample: 'w', description: 'Show who is logged on and what they are doing' }
    ];

    return (
        <div>
            <h3>top linux commands ref</h3>
            <ul>
                {commands.map((cmd, index) => (
                    <li key={index}>
                        <strong>{cmd.name}</strong>: {cmd.description}
                        <span> ==> <code>`{cmd.sample}`</code></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default nix;