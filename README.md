# aws-lambda-sns-to-slack

An AWS Lambda function for Slack notifications to more than one channels.

This function was originally derived from the AWS blueprint named [cloudwatch-alarm-to-slack](https://aws.amazon.com/blogs/aws/new-slack-integration-blueprints-for-aws-lambda/).

Follow these steps to configure the webhook in Slack:

    1. Navigate to https://<your-team-domain>.slack.com/services/new
    2. Search for and select "Incoming WebHooks".
    3. Choose the default channel where messages will be sent and click "Add Incoming WebHooks Integration".
    4. Copy the webhook URL from the setup instructions and use it in the next section.

To encrypt your secrets use the following steps:

    1. Create or use an existing KMS Key - http://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html
    2. Click the "Enable Encryption Helpers" checkbox
    3. Paste <SLACK_HOOK_URL> into the kmsEncryptedHookUrl environment variable and click encrypt

    Note: You must exclude the protocol from the URL (e.g. "hooks.slack.com/services/abc123").

    4. Give your function's role permission for the kms:Decrypt action.
 
    Example:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1443036478000",
            "Effect": "Allow",
            "Action": [
                "kms:Decrypt"
            ],
            "Resource": [
                "<your KMS key ARN>"
            ]
        }
    ]
}
```

## Testing lambdas locally with the CLI

Install local lambda

```console
npm install -g lambda-local
```

Run the lambda-local cli, passing in the function js, handler, and an event sample

```console
lambda-local -l lambda-sns-to-slack-test.js -h driver -e sns_from_cloudwatch.js -E {\"slackChannelReg\":\"'\\w+_(\\w+)'\"}
```
