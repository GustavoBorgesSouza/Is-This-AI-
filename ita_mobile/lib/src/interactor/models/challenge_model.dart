class ChallengeModel {
  final String imageUrl;
  final String imageAltDescription;
  late final String imageAIDescription;
  final String publisherName;
  final String publisherLink;

  ChallengeModel({
    required this.imageAltDescription,
    required this.publisherName,
    required this.publisherLink,
    required this.imageUrl,
  });
}
