module.exports = {
"Records": [
    {
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:EXAMPLE",
      "EventSource": "aws:sns",
      "Sns": {  
        "Type": "Notification",
        "MessageId": "47d72c67-273f-5bb0-aaf7-7daf3298db87",
        "TopicArn": "arn:aws:sns:ap-northeast-1:710026814108:ProdServiceAlarm_channel",
        "Subject": "ALARM: \"pepper.prod_high-sum-request\" in Asia Pacific - Tokyo",
        "Message": '{"AlarmName":"pepper.prod_high-sum-request","AlarmDescription":null,"AWSAccountId":"710026814108","NewStateValue":"OK","NewStateReason":"Threshold Crossed: 1 datapoint (39.0) was not greater than or equal to the threshold (300.0).","StateChangeTime":"2017-06-24T07:25:28.823+0000","Region":"Asia Pacific - Tokyo","OldStateValue":"ALARM","Trigger":{"MetricName":"RequestCount","Namespace":"AWS/ApplicationELB","StatisticType":"Statistic","Statistic":"SUM","Unit":null,"Dimensions":[{"name":"LoadBalancer","value":"app/api-prod-elb/857b639ba6cb877c"},{"name":"TargetGroup","value":"targetgroup/pepper-prod-tg-443/66ed9ac7d74a6891"}],"Period":300,"EvaluationPeriods":1,"ComparisonOperator":"GreaterThanOrEqualToThreshold","Threshold":300.0,"TreatMissingData":"","EvaluateLowSampleCountPercentile":""}}',
        "Timestamp": "2017-06-24T07:23:19.692Z",
        "SignatureVersion": "1",
        "Signature": "DjswKGUTNMZwc6LlaZktwdaDm+4x5biR3ciBx8e32JvCo3ajTFba++DB4avoSIDHLEqSQ0enZjAjZgC0P2JoMFTAbkpx03XXCYpgnOc8/N0xKp93Q0Q1JRrILxT/y1sUOQDCI98srxGzCef3LnSw9zUsLx9KYAacTAg6LHXA2xsi+9tiLfG7nBz6IMZmeYPTc9b+hlXysFc/JBWj6EPS2n+a6u7h6tGMCEtjRiF3SlkIOBRkNTrkW35qdohhOq4bd5EUefgktxwGF+UTd3lR1qlSx1PzRNYQzBRqBpDJ1NnJEicCDAFnOYeirPe8sRbhYNhDItW4xRYIGrthiGZlqw==",
        "SigningCertUrl": "https://sns.ap-northeast-1.amazonaws.com/SimpleNotificationService-b95095beb82e8f6a046b3aafc7f4149a.pem",
        "UnsubscribeUrl": "https://sns.ap-northeast-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:ap-northeast-1:710026814108:ProdServiceAlarm:e841577b-6c3f-49ef-ba0d-9e10aacf7982",
        "MessageAttributes": {}
      }
    }
  ]
};
