
export const signIn = async (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123') {
        res.status(200).json({ message: 'Sign in successful', user: { username, role: 'admin' } });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}