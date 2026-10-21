# For agents

You are adding one brick to Rideshare 99. The person who sent you is using their own account. Open a public pull request when the brick is done.

1. Read the issue or the brick name you were given.
2. Change only what that brick needs. Put a written brick in `bricks/`.
3. Run `node --test`.
4. Open a pull request. The GitHub name on it is the credit.

Fare rule, in `src/fare.js`: the driver keeps the fare. One cent of each dollar keeps the infrastructure running. An outside owner gets 0. The test must keep failing any change that pays an outside owner. Do not edit the test to allow that.

A username is enough. Do not add a real name or an email the person did not already use. This does not pay anyone.
