import Image from 'next/image';
import type { FeatureImage } from '@/lib/types';
import { Container } from '@/components/ui/container';
import { siteMeta } from '@/lib/site-content';
import { BodyCopy, Caption, CardTitle, Eyebrow } from '@/components/ui/typography';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionParallax, MotionReveal, MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';
import { getOptimizedSrc } from '@/lib/image-utils';

type ImageFeatureProps = {
  feature: FeatureImage;
};

export function ImageFeature({ feature }: ImageFeatureProps) {
  // Prefer an optimized static variant (avif/webp) if available in /public
  const imgSrc = getOptimizedSrc(feature.src);
  const absoluteUrl = new URL(imgSrc.replace(/^\/+/, ''), siteMeta.url).toString();

  return (
    <section className="py-8 md:py-14" itemScope itemType="https://schema.org/ImageObject">
      {/* hidden machine-readable image metadata */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <meta itemProp="contentUrl" content={absoluteUrl} />
        <meta itemProp="name" content={feature.title.de} />
        <meta itemProp="caption" content={feature.caption.de} />
      </div>
      <Container>
        <div className="ds-split-grid lg:items-center">
          <MotionSequence className="ds-stack" style={{ ['--stack-gap' as string]: '1.25rem' }}>
            <MotionSequenceItem>
              <Eyebrow as="p">{feature.badge}</Eyebrow>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <MotionReveal kind="mask">
                <CardTitle as="h3" className="max-w-2xl whitespace-pre-line text-[2.4rem] md:text-[3.15rem]">
                  {feature.title.de}
                </CardTitle>
              </MotionReveal>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <BodyCopy className="max-w-xl text-base md:text-lg">{feature.caption.de}</BodyCopy>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <EnterpriseCard variant="surface" className="p-5">
                <Caption as="p">Overview</Caption>
                <BodyCopy className="mt-4 ds-body-copy--dense">{feature.title.de}</BodyCopy>
                <BodyCopy className="mt-4 ds-body-copy--dense">{feature.caption.de}</BodyCopy>
              </EnterpriseCard>
            </MotionSequenceItem>
          </MotionSequence>

          <MotionParallax className="h-full">
            <EnterpriseCard variant="lift" className="overflow-hidden p-0">
              <Image
                src={imgSrc}
                alt={feature.alt}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </EnterpriseCard>
          </MotionParallax>
        </div>
      </Container>
    </section>
  );
}