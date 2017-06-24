# aws-lambda-sns-to-slack

## Deployment

An AWS Lambda function for Slack notifications to **multiple channels**.

This function was originally derived from the AWS blueprint named [cloudwatch-alarm-to-slack](https://aws.amazon.com/blogs/aws/new-slack-integration-blueprints-for-aws-lambda/).

Follow these steps to configure the webhook in Slack:

    1. Navigate to https://<your-team-domain>.slack.com/services/new
    2. Search for and select "Incoming WebHooks".
    3. Choose the default channel where messages will be sent and click "Add Incoming WebHooks Integration".
    4. Copy the webhook URL from the setup instructions and use it in the next section.

To specify which channel push to:

    1. If you have single channel, specify the #channel name into the slackChannel environment variable.

> You must include '#' prior to the channel name, #prod-alarm, for example.

    2. If you have multiple channel, specify the regular expression which you expect to parse channel name from SNS topic into the slackChannelReg environment variable.

> Given \w+_(.+) as example, your channel name will be '#prod-warning' if SNS topic is 'ProdServiceAlarm_prod-warning'.

To encrypt your secrets use the following steps:

    1. Create or use an existing KMS Key - http://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html
    2. Click the "Enable Encryption Helpers" checkbox
    3. Paste <SLACK_HOOK_URL> into the kmsEncryptedHookUrl environment variable and click encrypt.

> You must exclude the protocol from the URL (e.g. "hooks.slack.com/services/abc123").

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

## Testing lambda locally (in progress)

> The session intents to ease integration testing among SNS -> Lambda > Slack, however I don't have time to complete this yet. Pull Request is welcome.

Install local lambda

```console
npm install -g lambda-local
```

Run the lambda-local cli, passing in the function js, handler, and an event sample

```console
lambda-local -l lambda-sns-to-slack-test.js -h driver -e sns_from_cloudwatch.js -E {\"slackChannelReg\":\"'\\w+_(\\w+)'\"}
```
